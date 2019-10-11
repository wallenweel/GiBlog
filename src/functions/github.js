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
      body: content,
      comments,
      created_at: created,
      html_url: url,
      id,
      labels
    }) => ({
      content,
      comments,
      created,
      url,
      id,
      labels: labelsCleaner(labels)
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
