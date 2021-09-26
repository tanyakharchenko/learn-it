import { StatsBase } from 'fs';
import { Module } from './Module';

enum Categories {
    Beauty, 
    Animals,
    Dogs,
    Education
}
export interface Course {
    id: string;
    title: string;
    description: string;
    startDate: null | Date;
    endDate: null | Date;
    modules: Module[];
    authorId: string;
    price: {
        value: string;
        currensy: string;
    };
    category: Categories;
    duration: number;
};