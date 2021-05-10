import React from 'react'
import { Card } from 'antd';
import { GithubOutlined, HomeOutlined, ReadOutlined } from '@ant-design/icons'

const { Meta } = Card;
function CardComponent(props) {
  return (
    <div>
      <a>
        <Card
          hoverable
          style={{ width: 300, height: 350, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          cover={<img alt="example" src={props.cardImg} style={{ width: "100%", height: 160 }} onClick={props.goHomeFunc}/>}
          actions={[
            <HomeOutlined onClick={props.goHomeFunc}/>,
            <GithubOutlined onClick={()=> window.open(props.githubLink, "_blank")}/>,
            <ReadOutlined />
          ]}
        >
          <Meta title={props.title} description={props.description} />
        </Card>
      </a>
    </div>
  )
}

export default CardComponent;
