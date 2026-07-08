// src/hooks/useFetch.test.ts

import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "@/hooks/useFetch";

describe("useFetch 테스트", () => {
  test("데이터를 성공적으로 가져오는지 테스트", async () => {
    // 모킹
    const mockData = { name: "Test Data" };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    // useFetch 실행
    const { result } = renderHook(() =>
      useFetch<typeof mockData>("https://api.example.com/data"),
    );

    // 초기 로딩, 데이터, 에러 상태 확인
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    // 데이터 요청 동안 기다리기
    await waitFor(() => {
      // 데이터가 올바르게 설정되었는지 확인
      expect(result.current.data).toEqual(mockData);
      // 에러가 null인지 확인
      expect(result.current.error).toBeNull();
      // API가 올바른 URL로 호출되었는지 확인
      expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/data");
    });
  });
});
