import React from 'react';
import { Document, Example } from '@component-controls/core';
import { GithubAvatarList, GithubAvatarListProps } from '@component-controls/components';

export default {
  title: 'component-controls/GithubAvatarList',
  component: GithubAvatarList,
  category: 'Display',
} as Document;

export const overview: Example<GithubAvatarListProps> = ({ size, overlap }) => {
  return (
    <GithubAvatarList
      size={size}
      overlap={overlap}
      users={[
        { username: 'hasparus' },
        { username: 'lachlanjc' },
        { username: 'atanasster' },
      ]}
    />
  );
};

export const maxItems: Example<GithubAvatarListProps> = () => {
  return (
    <GithubAvatarList
      maxItems={2}
      users={[
        { username: 'hasparus' },
        { username: 'lachlanjc' },
        { username: 'atanasster' },
      ]}
    />
  );
};
