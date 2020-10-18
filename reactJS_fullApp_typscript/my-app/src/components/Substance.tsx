import React, {useState} from 'react';
import SubstanceItem from "./SubstanceItem"
// import cx from 'classnames';

const list: string[][] = [
  ["ahmed", "mohamed", "abdo", "Hassan", "None", "None"],
  ["Nada", "Sobhy", "Allam", "Hossam", "None", "None"],
  ["ahmed", "None", "abdo", "Hassan", "None", "None"],
  ["Sobhy", "Allam", "None", "None", "None", "None"],
  ["Hassan", "Nada", "None", "None", "None", "None"],
  ["mohamed", "ahmed", "None", "None", "None", "None"]
];
// console.log(substanceList);

// console.log(substanceList);

export default function Substance(){
  const substanceList: string[]=[]
  for (let i=0; i<list.length; i++){
    for(let ii=0; ii<= 1; ii++){
      substanceList.push(list[i][ii]);
    }
  }
  let positionX = "100px";
  // const [positionX, setPositionX] = useState("5px");
  return (
    <div>
      {substanceList.map((label: string, index: number) => {
        console.log(label);
        switch (index) {
          case 0||6:
            positionX = "200px";
            // setPositionX("100px");
            break;
          case 1||7:
            positionX = "300px";
            // setPositionX("120px");
            break;
          case 2||8:
            positionX = "400px";
            // setPositionX("150px");
            break;
          case 3||9:
            positionX = "500px";
            // setPositionX("180px");
            break;
          case 4||10:
            positionX = "600px";
            // setPositionX("230px");
            break;
          case 5||11:
            positionX = "700px";
            // setPositionX("270px");
            break;
          default:
            break;
        }
        return (
          <SubstanceItem key={index} id={index} subst={label} positionx={positionX}/>
        );
      })}
    </div>
  );
}
