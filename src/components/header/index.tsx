export interface IHeaderProps {
  name?: string;
}
const HeaderComponent = ({ name = '' }: IHeaderProps) => {
  return <>HeaderComponent1</>;
};

export default HeaderComponent;
