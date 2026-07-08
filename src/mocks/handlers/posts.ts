// src/mocks/handlers/posts.ts
// posts API 요청을 가로채서 가짜 응답을 반환하는 MSW 핸들러 파일입니다.

import { http, HttpResponse } from "msw";

export const postsHandlers = [
  http.get("http://localhost:4000/posts", () => {
    return HttpResponse.json([
      { id: 1, title: "첫 번째 게시글", body: "내용 1" },
      { id: 2, title: "두 번째 게시글", body: "내용 2" },
    ]);
  }),
  http.get("http://localhost:4000/posts/:id", ({ params }) => {
    return HttpResponse.json({
      id: Number(params.id),
      title: "첫 번째 게시글",
      body: "내용 1",
    });
  }),
];
