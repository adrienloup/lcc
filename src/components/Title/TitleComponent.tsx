import { ChildrenType } from '../../models/ChildrenType';

interface TitleComponentProps extends ChildrenType {
  cssClass?: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const TitleComponent = ({
  tag: Tag = 'h1',
  children,
  cssClass,
}: TitleComponentProps) => {
  return <Tag className={cssClass}>{children}</Tag>;
};
