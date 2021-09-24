import { Module } from './Module';

export interface Course {
    id: string;
    title: string;
    description: string;
    modules: Module[];
    authorId: string;
    price: {
        value: string;
        currensy: string;
    }
};