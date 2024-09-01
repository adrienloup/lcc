import { ChildrenType } from '../../models/ChildrenType';

interface TitleProps extends ChildrenType {
  cssClass?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const TitleComponent = ({
  tag: Tag = 'h1',
  children,
  cssClass,
}: TitleProps) => {
  return <Tag className={cssClass}>{children}</Tag>;
};
