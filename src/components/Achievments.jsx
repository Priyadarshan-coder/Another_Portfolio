import React from 'react'
import './Achievments.css'
const Achievments = () => {
  return (
    <>
    <div className="achievment-header" style={{width:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <h4 style={{ color: 'rgba(0, 0, 0, 0.493)', fontSize:'2.5rem'}}>Some of my</h4>
    <h1 style={{fontSize:'2.8rem'}}>Achievments</h1>
    </div>
    <div className="achievment-container">
        <div className="container-elems">
            <div className="achiev-top">
        <h2><a href="https://leetcode.com/Priyadarshancodr/">Leetcode</a></h2>
        <h2>DSA Problem Solving</h2>
        </div>
        <h3>Solved over 800 problems at leetcode on topics such as Dynamic Programming , Graphs , Trees , Heaps , Arrays , Greedy algorithms , Stacks , Queues , Bit Manipulations and constructive algorithms</h3>
        <h2>Aug 2022 - Oct 2024</h2>
        </div>
        <div className="container-elems">
            <div className="achiev-top">
        <h2><a href="https://www.geeksforgeeks.org/user/priyadarshanghcmf/">GeeksForGeeks</a></h2>
        <h2>DSA Problem Solving</h2>
        </div>
        <h3>Solved over 200 problems at GeeksForGeeks on topics such as Dynamic Programming , Graphs , Trees , Heaps , Arrays , Greedy algorithms , Stacks , Queues , Bit Manipulations and constructive algorithms</h3>
        <h2>Aug 2022 - Oct 2024</h2>
        </div>
        <div className="container-elems">
            <div className="achiev-top">
        <h2><a href="#">Smart India Hackathon</a></h2>
        <h2>Problem Statement Solution</h2>
        </div>
        <h3>Competed against 130 other teams to secure top 30 position from intra school hackathon</h3>
        <h2> Oct 2023</h2>
        </div>
    </div>
    </>

  )
}

export default Achievments
