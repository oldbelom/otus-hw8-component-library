import React from "react";

interface Props {
  fontStyle: string;
  fontWeight: string;
}

export default class Paragraph extends React.Component<
  Props,
  Record<string, unknown>
> {
  render() {
    return (
      <p
        data-testid="paragraph"
        style={{
          fontStyle: this.props.fontStyle,
          fontWeight: this.props.fontWeight,
        }}
      >
        React-компоненты — это маленькие, повторно используемые части кода,
        которые возвращают React-элементы для отображения на странице. Самый
        простой React-компонент — это простая функция JavaScript, которая
        возвращает элементы React.
      </p>
    );
  }
}
