import type { BlogTemplateProps } from "./shared";
import { LongformEditorialTemplate } from "./longform-editorial";
import { MagazineTwoColTemplate } from "./magazine-two-col";
import { HowToStepsTemplate } from "./how-to-steps";
import { ListicleTemplate } from "./listicle";
import { ComparisonBlogTemplate } from "./comparison-blog";
import { QaInterviewTemplate } from "./qa-interview";
import { DataReportTemplate } from "./data-report";
import { CaseStudyTemplate } from "./case-study";
import { GuideTocTemplate } from "./guide-toc";
import { PhotoEssayTemplate } from "./photo-essay";
import { OpinionColumnTemplate } from "./opinion-column";
import { ChecklistTemplate } from "./checklist";
import { DeepDiveTemplate } from "./deep-dive";
import { NewsBriefTemplate } from "./news-brief";
import { TrendsTemplate } from "./trends";

/**
 * Per-article blog templates. Each article's `design` key maps to a bespoke,
 * full-page microsite template (its own layout + colour theme). Articles
 * without a design fall back to the longform editorial template.
 */
const REGISTRY: Record<string, (p: BlogTemplateProps) => React.ReactNode> = {
  "longform-editorial": LongformEditorialTemplate,
  "magazine-two-col": MagazineTwoColTemplate,
  "how-to-steps": HowToStepsTemplate,
  listicle: ListicleTemplate,
  "comparison-blog": ComparisonBlogTemplate,
  "qa-interview": QaInterviewTemplate,
  "data-report": DataReportTemplate,
  "case-study": CaseStudyTemplate,
  "guide-toc": GuideTocTemplate,
  "photo-essay": PhotoEssayTemplate,
  "opinion-column": OpinionColumnTemplate,
  checklist: ChecklistTemplate,
  "deep-dive": DeepDiveTemplate,
  "news-brief": NewsBriefTemplate,
  trends: TrendsTemplate,
};

export function BlogPage({ article, related }: BlogTemplateProps) {
  const Template =
    (article.design && REGISTRY[article.design]) || LongformEditorialTemplate;
  return <Template article={article} related={related} />;
}
