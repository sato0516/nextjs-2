import Link from "next/link";

export default function Home() {
  return (
    <main className="py-24 text-gray-700">
      <div className="mx-auto max-w-3xl text-center px-4">
        <h1 className="text-2xl font-semibold mb-3">HOME</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          このプロジェクトでは、Next.js の環境構築から始めて、<br />
          フロントエンドとバックエンドの連携まで一通り学習しました。<br />
          フォーム作成を通じて UI デザインやバリデーション、<br />
          Server Actions を利用した送信処理、さらに Prisma ORM による<br />
          データベース登録機能の実装までを行いました。
        </p>

        <Link
          href="/contacts"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
        >
          フォームページはこちら
        </Link>

      </div>
    </main>
  );
}