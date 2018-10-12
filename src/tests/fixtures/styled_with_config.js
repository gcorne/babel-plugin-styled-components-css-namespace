const styled = {
  div: {
    withConfig() {}
  }
};

const MyStyledComponent = styled.div.withConfig({
  displayName: 'Foo'
})`
  background-color: 'yellow';
`;

export default MyStyledComponent;
