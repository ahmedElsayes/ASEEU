import React from 'react';
// import cx from 'classnames';
type supstanceProps = {
  subst: string;
  id: number;
  key: number;
  positionx: string;
}

export default function SubstanceItem({subst, id, positionx}: supstanceProps){
//   console.log(subst);
  return (
    <div style={{zIndex:5, position: "absolute", top: (id%2 === 0) ? "200px":"400px", left: positionx, width: "fit-content"}}>
      <p style={{fontSize: "12px"}}>{subst}</p>
    </div>
  );
}
