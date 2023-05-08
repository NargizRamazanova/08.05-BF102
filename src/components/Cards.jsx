import React, { useEffect, useState } from 'react'
import { Card, Space, Col, Row, Spin } from 'antd';

const { Meta } = Card;

const myDiv = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default function Cards() {
    const [isLoading, setIsLoading] = useState(true)
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
                setIsLoading(false)
            })
    }, [])


    return (
        <Space direction="vertical" size={16}>
            {
                isLoading ? (
                    <div style={myDiv}>
                        <Spin size="large"/>
                    </div>
                ) : (
                    <Row>
                        {
                            photos.map((elem) => (
                                <Col span={4} style={{ marginBottom: "20px" }} key={elem.id}>
                                    <Card
                                        
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={elem.url} />}
                                    >
                                        <Meta title={elem.title} description={elem.thumbnailUrl} />
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                )
            }

        </Space>
    )
}
