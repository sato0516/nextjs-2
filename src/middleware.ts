import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    if (!request.nextUrl.pathname.includes('.')) {
    console.log('ミドルウェアのテスト');
    }
    return NextResponse.next(); //リクエストを次の処理へ進める(この行あってもなくても…？？)
}

export const config = {
    matcher: ['/blog/:path*'], //ミドルウェアを適用するパス(URL)を指定
}