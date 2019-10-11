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

export function labelsCleaner(labels = []) {
  return labels.map(({ color, id, name, url }) => ({
    color,
    id,
    name,
    url
  }));
}
