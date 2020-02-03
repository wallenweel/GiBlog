# 开发文档

## 原则

|  通用性  |   定制性   |  易用性  |      维护性      |
| :------: | :--------: | :------: | :--------------: |
| 封装 API | 模块化组件 | 配置文件 | 类型、函数、封装 |
|    x     |     x      |    x     |        x         |

## 接口

### Github

[API V3](https://developer.github.com/v3/)

## 组件

### App

```jsx
<App />
    <Main />
    <Setting />
```

### 主界面

```jsx
<Main />
    <Drawer />
        <OwnerArea />

        // repo's issues[, files, gists]
        <Sources />

        <Taxonomy />
            <NavTag /> // ?= issues or gist
            <NavCategory /> // ?= files

    <Toolbar />
        <OwnerAvatar />
        <ListBtn />
        <Filter />
            <DrawerBtn /> // ?= Drawer is hide
            <Back />
        <RefreshBtn />
        <MoreBtn />

    <List />
        // maybe has other types
        <ListArticleItem />

    <Article />
        <ArticleInfo />
        <ArticleContent />

        <Comment />
            <CommentSend />
                <CommentVisitor />
                <CommentEditor />
            <CommentList />
                <CommentListItem />

        <PageTurning />
```

## 配置

> 同时存在的话，`gist.ini` 优先于 `config.ini`，都不存在的话，使用项目缺省的示例配置

使用 Gist 文件: `custom/gist.ini`

使用仓库文件: `custom/config.ini`

## 开发

- 使用 Typescript 检查数据类型
- 避免使用双相数据绑定
