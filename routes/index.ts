///<reference path='.../DefinitelyTyped/express/express.d.ts' />

import express = module('express')
export function index(req: any, res: any) {
    res.render('index', { title: 'Page Title', testArray: ["1", "2", "3", "4"] })
}