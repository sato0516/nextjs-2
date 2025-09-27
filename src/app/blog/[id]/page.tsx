type Params = {
    params: Promise<{
         id: string 
    }>
};

export async function generateMetadata({params}: Params) {
  const { id } = await params
  return {
    title: `ブログ記事ID: ${id} のページ`,
  }
}

export default async function BlogPage({params}: Params) {
    console.log(params);
    const { id } = await params;
  return (
    <div>ブログID： { id }</div>
  );
}
