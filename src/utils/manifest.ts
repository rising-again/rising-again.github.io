// src/utils/manifest.ts
import fs from 'fs';
import path from 'path';

export interface ManifestItem {
  title: string;
  description: string;
  audience: string[];
  topic: string;
  contact: {
    phone?: string;
    email?: string;
    location?: string;
  };
  truths: string[];
  myths: string[];
  article: string;
}

// Convert title to URL-friendly slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Get all available topics from manifest
export function getAvailableTopics(manifest: ManifestItem[]): string[] {
  const topics = new Set(manifest.map(item => item.topic));
  return Array.from(topics);
}

// Get available audiences for a specific topic
export function getAvailableAudiences(manifest: ManifestItem[], topic: string): string[] {
  const audiences = new Set<string>();
  manifest
    .filter(item => item.topic === topic)
    .forEach(item => {
      item.audience.forEach(aud => audiences.add(aud));
    });
  return Array.from(audiences);
}

// Get all articles for a specific topic (all audiences)
export function getArticlesByTopic(manifest: ManifestItem[], topic: string): ManifestItem[] {
  return manifest.filter(item => item.topic === topic);
}

// Get articles matching topic and audience
export function getMatchingArticles(manifest: ManifestItem[], topic: string, audience: string): ManifestItem[] {
  return manifest.filter(item =>
    item.topic === topic && item.audience.includes(audience)
  );
}

// Get specific article by topic, audience, and title slug
export function getSpecificArticle(manifest: ManifestItem[], topic: string, audience: string, titleSlug: string): ManifestItem | null {
  const matches = getMatchingArticles(manifest, topic, audience);
  return matches.find(item => slugify(item.title) === titleSlug) || null;
}

// Load and parse manifest.json (for use in Astro pages)
export function loadManifest(): ManifestItem[] {
  try {
    const manifestPath = path.join(process.cwd(), 'src/data/manifest.json');
    const manifestContent = fs.readFileSync(manifestPath, 'utf-8');
    return JSON.parse(manifestContent) as ManifestItem[];
  } catch (error) {
    console.error('Error loading manifest:', error);
    return [];
  }
}

// Read article content from file
export function readArticleContent(articlePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), articlePath);
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (error) {
    console.error(`Error reading article from ${articlePath}:`, error);
    return '';
  }
}