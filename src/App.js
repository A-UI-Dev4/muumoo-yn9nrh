import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  useEffect(() => {
    const college = [
      {
        name: 'Karpagam College',
        department: [
          {
            name: 'CS',
            fee: '10000',
          },
          {
            name: 'Mec',
            fee: '20000',
          },
          {
            name: 'B.COM',
            fee: '100000',
          },
          {
            name: 'BBM',
            fee: '50000',
          },
          {
            name: 'CSE',
            fee: '50000',
          },
        ],
        location: [
          {
            name: 'Bangalore',
          },
          {
            name: 'Coimbatore',
          },
          {
            name: 'Chennai',
          },
        ],
      },
    ];
    console.log('college', college);

    let deepCopyOfCollegeArray = JSON.parse(JSON.stringify(college));

    deepCopyOfCollegeArray.forEach((x) => {
      let departmentFee = x.department.filter((d) => d.fee == '50000');
      console.log('departmentFee', departmentFee);
      x.department = departmentFee;
    });

    console.log('deepCopyOfCollegeArray', deepCopyOfCollegeArray);
    
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
