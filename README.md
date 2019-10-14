# 🌒📖 GiBlog - A Blog Base on GitHub Issues

> This is a simple markdown blog, use GitHub APIs as backend. emmm... Maybe it seem more like a Notebook 😋.

## Features

- [ ] Switch repositories, avoid to change config
- [ ] Switch users, avoid to install in multiple accounts
- [x] Use Gist file as config, not only local files
- [x] Category articles(issues) by tags(labels)
- [ ] Login to update config and settings in frontend
- [ ] Frontend setup approach, just seems cool
- [ ] Sample markdown editor to change issue in frontend
- [ ] Comments and login github to reply
- [ ] Light and Dark themes
- [ ] More

## Development Progress

| ⌚  | 🌚  | 🌑  | 🌒  | 🌓  | 🌔  | 🌕  | 🌝  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 🚲  |     |     | 🤪  |     |     |     |     |
| 🛵  |     |     |     |     |     |     |     |
| 🚗  |     |     |     |     |     |     |     |
| 🛫  |     |     |     |     |     |     |     |
| 🚀  |     |     |     |     |     |     |     |

## Get Started

## Configuration

### Blog's Config

#### Get Config Order

`gist.ini` > `(config|settings).json` > `example.(config|settings).json`

#### In Gist [Recommend]

gist options: `[blog]/gist.ini`

```ini
# id of the gist contains blog's config
id=

# public status: yes or no. if is private,
# must has "access token" with base64 format
public=yes

# github personal access token
# but need to convert to base64 format, because github will check
# your token in commits and remove it from your settings.
# Easy Approach: Base64.btoa("your token") in Console(F12)
base64_token=

# filename of config
config=config.json

# filename of settings
settings=settings.json
```

#### In File

config file: `[blog]/custom/config.json`

```js
[
  {
    *"title": "GiBlog Alpha",
    "description": "GitHub Issues Blog.",

    // Your Name, set to replace github's
    "owner": "",

    // Your Email, same above
    "email": "",

    // blog's theme, default is "Light", and will has "Dark"
    // can replace same option in settings.json
    "theme": "",

    // where your blog was installed
    // here is installing in a repo named "blog"
    *"repo": "blog",

    // github username for fetch repo or login
    *"username": "wallenweel",

    // github login password, just used in testing
    // !! Never Saved in Commits !!
    "password": "",

    // base64 encryted personal token
    // avoid github to remove token in commits checking
    // at least select: public_repo / read:user
    *"base64_token": "ZjM0OGI4NjBhZDdhY2Y4MTk4NGQ2M2FmYmYwZjYyNzUwZWJlOGRlMA==",

    // can switch repos under the username
    // do not have to be the installing repo, any you want
    *"repos": ["GiBlog"]
  }
]
```

settings file: `[blog]/custom/settings.json`

```js
{
  // Light(Default) or Dark
  "theme": "Default"
}
```

## Project setup

```sh
pnpm install
```

### Compiles and hot-reloads for development

```sh
pnpm run serve
```

### Compiles and minifies for production

```sh
pnpm run build
```

## License

MIT License | Copyright (c) 2019 wallen
