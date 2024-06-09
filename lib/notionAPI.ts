import { Client } from '@notionhq/client';

// NotionのAPIキーを設定します
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

// 以下に必要なAPIリクエストを記述します
// ...
// ...



// ...

// Path: pages/index.tsx
export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || '',
        page_size: 10,
        // filter_properties: ["propertyID1", "propertyID2"]
    });

    const AllPosts = posts.results;
    return AllPosts;
};
