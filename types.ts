/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'AI/ML' | 'Cloud' | 'Web' | 'Desktop' | 'Other';
  imageUrl: string;
  features: string[];
  link?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  subtitle: string; // Institution or Company
  type: 'Education' | 'Experience' | 'Certification' | 'Internship';
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'project', project: Project }
  | { type: 'timeline', item: TimelineItem };