# songyaeji.github.io

보안 연구실 스타일 개인 포트폴리오. Astro 정적 사이트, GitHub Actions로 자동 배포.

**Live:** https://songyaeji.github.io

## 콘텐츠 수정 방법

| 무엇을 | 어디를 |
|---|---|
| 이름·소속·현재 활동·관심분야·타임라인·스킬·연락처 | `src/data/profile.ts` |
| 논문 추가 | `src/content/research/*.md` 파일 1개 추가 (플레이스홀더 파일 교체) |
| 프로젝트 추가 | `src/content/projects/*.md` 파일 1개 추가 |

frontmatter 필드는 `src/content.config.ts` 스키마 참고. `main`에 push하면 자동 배포.

## 로컬 개발

```sh
npm install
npm run dev      # 개발 서버
npm run build    # dist/ 빌드
npm run preview  # 빌드 결과 확인
```
