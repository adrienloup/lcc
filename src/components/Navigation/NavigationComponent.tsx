import { ChildrenType } from '../../models/ChildrenType';

interface NavigationComponentProps extends ChildrenType {
  cssClass?: string;
}

export const NavigationComponent = ({
  cssClass,
  children,
}: NavigationComponentProps) => {
  return (
    <nav role="navigation" className={cssClass}>
      {children}
    </nav>
  );
};
