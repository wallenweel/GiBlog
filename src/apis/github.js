import GitHub from "github-api";

import {
  CONNECT_API_ERROR,
  NOT_FOUND_ANY_ISSUES,
  BLANK_MARKDOWN_TEXT
} from "@/types";

export default ({ username, password, token }) => {
  const api = new GitHub({ username, password, token });

  return (name, ...params) =>
    ({
      getProfile,
      getArticles: getIssues,
      getTags: getLabels,
      getMarkdownHTML: getMarkdown
    }[name](api, ...params));
};

async function getProfile(api) {
  const { status, data = [] } = await api.getUser().getProfile();

  if (status !== 200) return [CONNECT_API_ERROR];

  const profile = profileCleaner(data);

  return [null, profile];
}

async function getIssues(api, { username, repo }) {
  const wrap = api.getIssues(username, repo);
  const { status, data = [] } = await wrap.listIssues();

  if (status !== 200) return [CONNECT_API_ERROR];
  if (!data.length) return [NOT_FOUND_ANY_ISSUES];

  const issues = issuesCleaner(data);

  return [null, issues];
}

async function getLabels(api, { username, repo }) {
  const wrap = api.getIssues(username, repo);
  const { status, data = [] } = await wrap.listLabels();

  if (status !== 200) return [CONNECT_API_ERROR];
  if (!data.length) return [NOT_FOUND_ANY_ISSUES];

  const labels = labelsCleaner(data, true);

  return [null, labels];
}

async function getMarkdown(api, text = "") {
  if (!text) return [BLANK_MARKDOWN_TEXT];

  const { status, data: html } = await api.getMarkdown().render({ text });

  if (status !== 200) return [CONNECT_API_ERROR];

  return [null, html];
}

/** Helper Functions */

export function profileCleaner(profile = {}) {
  const {
    avatar_url: avatar,
    bio: description,
    blog: home,
    email,
    followers,
    following,
    id,
    name,
    updated_at: updated
  } = profile;

  return {
    avatar,
    description,
    home,
    email,
    followers,
    following,
    id,
    name,
    updated
  };
}

export function issuesCleaner(issues = []) {
  return issues.map(
    ({
      title,
      body: content,
      comments,
      created_at: created,
      html_url: url,
      id,
      number,
      state,
      updated_at: updated,
      labels
    }) => ({
      title,
      content,
      excerpt: (content || "").slice(0, 20),
      comments,
      created,
      url,
      id,
      number,
      state,
      updated,
      tags: labelsCleaner(labels)
    })
  );
}

export function labelsCleaner(labels = [], withnotag = false) {
  const notag = [
    {
      id: 0,
      color: "",
      name: "no tag",
      url: ""
    }
  ];

  if (!labels.length) return notag;

  return [...(withnotag ? notag : []), ...labels].map(
    ({ color, id, name, url }) => ({
      color,
      id,
      name,
      url
    })
  );
}
