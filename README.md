# antd nx generator

Some generators for helping scaffold antd design based react components.

- Table view
- Detail view

The argument of the two generators is a file containing a typescript class or interface, the generator parse it as text
with regexes, planing to improve using AST.

Usage:

1.- Install

```
npm install @hanspoo/antd@latest
```

Generate code:

```
nx g @hanspoo/antd:detail libs/eventos/api/src/lib/EventoFull.ts
```

if the file name starts with slash, it is opened verbatim from file system, not relative to nx project, i.e:

```
nx g  @hanspoo/antd:detail /home/julian/fundacion/nx-workspace/libs/eventos/api/src/lib/DiaEvento.ts
```

## We scaffold this project with a package based empty nx monorepo

```
npm i @nx/plugin
nx g @nx/plugin:plugin antd
nx generate @nx/plugin:generator detail --project=antd
nx generate @nx/plugin:generator table --project=antd
```

## Update published release

```
nx build antd
cd ./dist/packages/antd/
npm publish --access public
```

## Warning: this is a Work in progress

This is our first plugin so it is not for regular use yet.
