import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://64.176.16.231:8090');

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  chapter_num: number;
  content_markdown: string;
  word_count: number;
  status: 'draft' | 'published';
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  content_markdown: string;
  meta_title: string;
  meta_description: string;
  topic: string;
  source_chapters: string[];
  word_count: number;
  status: 'draft' | 'review' | 'published';
}

export interface Tool {
  id: string;
  slug: string;
  title: string;
  tool_type: 'checklist' | 'planner' | 'guide';
  content_markdown: string;
  topic: string;
  source_chapters: string[];
  status: 'draft' | 'published';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content_markdown: string;
  cover_image: string;
  author: string;
  author_type: 'doctor' | 'automated';
  topic: 'nutricion' | 'prevencion' | 'tratamientos' | 'estilo-vida' | 'edad';
  tags: string[];
  source_chapters: string[];
  status: 'draft' | 'review' | 'published';
  published_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  chapter_slug: string;
  completed: boolean;
  completed_at: string;
  notes: string;
  exercises: any[];
  rating: number;
}

export interface UserPlanAccion {
  id: string;
  user_id: string;
  health_concerns: string;
  dental_history: string;
  current_symptoms: any[];
  lifestyle: any;
  goals: string;
  plan: any;
  progress: any;
  status: 'in_progress' | 'completed';
}

export interface UserChecklist {
  id: string;
  user_id: string;
  checklist_slug: string;
  items: any[];
  updated_at: string;
}

export async function getChapters(): Promise<Chapter[]> {
  const records = await pb.collection('chapters').getFullList({ sort: 'chapter_num' });
  return records as unknown as Chapter[];
}

export async function getChapter(slug: string): Promise<Chapter | null> {
  try {
    const record = await pb.collection('chapters').getFirstListItem(`slug="${slug}"`);
    return record as unknown as Chapter;
  } catch { return null; }
}

export async function getGuides(topic?: string): Promise<Guide[]> {
  const filter = topic ? `topic="${topic}"` : '';
  const records = await pb.collection('guides').getFullList({ filter, sort: 'title' });
  return records as unknown as Guide[];
}

export async function getGuide(slug: string): Promise<Guide | null> {
  try {
    const record = await pb.collection('guides').getFirstListItem(`slug="${slug}"`);
    return record as unknown as Guide;
  } catch { return null; }
}

export async function getTools(topic?: string): Promise<Tool[]> {
  const filter = topic ? `topic="${topic}"` : '';
  const records = await pb.collection('tools').getFullList({ filter, sort: 'title' });
  return records as unknown as Tool[];
}

export async function getTool(slug: string): Promise<Tool | null> {
  try {
    const record = await pb.collection('tools').getFirstListItem(`slug="${slug}"`);
    return record as unknown as Tool;
  } catch { return null; }
}

export async function getBlogPosts(topic?: string, limit = 10): Promise<BlogPost[]> {
  const filter = topic ? `topic="${topic}" && status="published"` : 'status="published"';
  const records = await pb.collection('blog').getList(1, limit, { filter, sort: '-published_at' });
  return records.items as unknown as BlogPost[];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const record = await pb.collection('blog').getFirstListItem(`slug="${slug}"`);
    return record as unknown as BlogPost;
  } catch { return null; }
}

export async function getUserProgress(): Promise<UserProgress[]> {
  if (!pb.authStore.isValid) return [];
  const records = await pb.collection('user_progress').getFullList();
  return records as unknown as UserProgress[];
}

export async function updateChapterProgress(chapterSlug: string, completed: boolean, notes?: string): Promise<void> {
  if (!pb.authStore.isValid) return;
  try {
    const existing = await pb.collection('user_progress').getFirstListItem(`chapter_slug="${chapterSlug}"`);
    await pb.collection('user_progress').update(existing.id, { completed, completed_at: completed ? new Date().toISOString() : null, notes: notes || existing.notes });
  } catch {
    await pb.collection('user_progress').create({ chapter_slug: chapterSlug, completed, completed_at: completed ? new Date().toISOString() : null, notes: notes || '' });
  }
}

export async function getUserPlanAccion(): Promise<UserPlanAccion | null> {
  if (!pb.authStore.isValid) return null;
  try {
    const records = await pb.collection('user_plan_accion').getFullList();
    return records[0] as unknown as UserPlanAccion;
  } catch { return null; }
}

export async function savePlanAccion(data: Partial<UserPlanAccion>): Promise<UserPlanAccion> {
  if (!pb.authStore.isValid) throw new Error('Not authenticated');
  const existing = await getUserPlanAccion();
  if (existing) {
    const updated = await pb.collection('user_plan_accion').update(existing.id, data);
    return updated as unknown as UserPlanAccion;
  } else {
    const created = await pb.collection('user_plan_accion').create({ ...data, user_id: pb.authStore.model?.id });
    return created as unknown as UserPlanAccion;
  }
}

export async function getUserChecklist(checklistSlug: string): Promise<UserChecklist | null> {
  if (!pb.authStore.isValid) return null;
  try {
    const record = await pb.collection('user_checklists').getFirstListItem(`checklist_slug="${checklistSlug}"`);
    return record as unknown as UserChecklist;
  } catch { return null; }
}

export async function saveChecklist(checklistSlug: string, items: any[]): Promise<void> {
  if (!pb.authStore.isValid) return;
  try {
    const existing = await pb.collection('user_checklists').getFirstListItem(`checklist_slug="${checklistSlug}"`);
    await pb.collection('user_checklists').update(existing.id, { items, updated_at: new Date().toISOString() });
  } catch {
    await pb.collection('user_checklists').create({ checklist_slug: checklistSlug, items, updated_at: new Date().toISOString() });
  }
}

export async function register(email: string, password: string, name: string) {
  const user = await pb.collection('users').create({ email, password, passwordConfirm: password, name });
  await pb.collection('users').authWithPassword(email, password);
  return user;
}

export async function login(email: string, password: string) {
  await pb.collection('users').authWithPassword(email, password);
}

export function logout() { pb.authStore.clear(); }
export function isAuthenticated() { return pb.authStore.isValid; }
export function getCurrentUser() { return pb.authStore.model; }
