import React from 'react';

type Props = {
  title: string[];
  data: Array<Array<JSX.Element | string>>;
}

function Table({ title, data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          {
            title.map((item, thKey) => {
              return (
                <th key={thKey}>{item}</th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, trKey) => {
            return (
              <tr key={trKey}>
                {
                  item.map((text, tdKey) => {
                    return (<td key={tdKey}>{text}</td>);
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default Table;