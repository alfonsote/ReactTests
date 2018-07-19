import React from "react";
import { Progress, Row, Col, Card } from 'antd'; 
const proDB = {
  "mainNode": {
      "physicalMemory": {
          "total": 17115242496,
          "available": 4563312640,
          "availablePercent": 26.662272772743307,
          "used": 12551802880,
          "usedPercent": 73.336985338849161
      },
      "virtualMemory": {
          "total": 140737488224256,
          "available": 138518266810368,
          "availablePercent": 98.423148343850059,
          "used": 2219221413888,
          "usedPercent": 1.5768516561499346
      },
      "drivesStats": [
          {
              "name": "C:\\ ()",
              "totalSize": 500003958784,
              "availableSize": 367715733504,
              "availableSizePercent": 73.542564422545283,
              "occupiedSize": 132288225280,
              "occupiedSizePercent": 26.457435577454707
          },
          {
              "name": "D:\\ (Data)",
              "totalSize": 868890963968,
              "availableSize": 666803376128,
              "availableSizePercent": 76.741893261598861,
              "occupiedSize": 202087587840,
              "occupiedSizePercent": 23.258106738401136
          },
          {
              "name": "S:\\ (Swap)",
              "totalSize": 36507217920,
              "availableSize": 19643133952,
              "availableSizePercent": 53.806165112457847,
              "occupiedSize": 16864083968,
              "occupiedSizePercent": 46.193834887542153
          },
          {
              "name": "V:\\ (ProDoc Volumes)",
              "totalSize": 54524899328,
              "availableSize": 54402752512,
              "availableSizePercent": 99.77597974960905,
              "occupiedSize": 122146816,
              "occupiedSizePercent": 0.2240202503909518
          }
      ]
  }
}
const elem = proDB.mainNode;

const elem2 = proDB.mainNode.drivesStats;


function LowSpace ({calc}){
  if (calc <= 90){
    return "Optimo"
    }else{
      
      return "Disco duro casi lleno"
    }
}
function LowSpaceChart ({calc}){
  if (calc <= 90){
    return    <Progress  status="active" type="dashboard"  percent= {calc} />
    }else{
      return   <Progress  status="exception" type="dashboard"  percent= {calc} />
    }
}

function Drives() {

  const content = elem2.map((post) =>
   
       <Col span={8}>
        <Card title={post.name} >  
      <Row>
        <Col span={12}>
        <p><b>Ocupado: </b>  {post.occupiedSize}</p>
      <p><b>Disponible: </b>  {post.availableSize}</p>
      <p><b>Total:</b>  {post.totalSize}</p>
     
        </Col>
        <Col push={2}  span={12}>
        <Row>   
        <LowSpaceChart calc={Math.round(post.availableSizePercent)} />
        </Row>
      <Row>  Espacio Ocupado</Row>
      <Row>  <LowSpace calc={post.availableSizePercent} />
      </Row>
        </Col>
      </Row>
    </Card>
    </Col>
   
  );
  return (
    <div>

      {content}
     
    </div>
  );
}



export const Vertical = () => (
  
  <div>
      <Row gutter={16}>
      <Col span={8}>
      <Card title="Memoria Utilizada" bordered={false}>  
     
      <Col span={12}>  <Progress type="circle"   percent= {Math.round(elem.physicalMemory.availablePercent)} /><Row>Memoria Fisica </Row></Col>
      <Col span={12}>  <Progress type="circle"  percent= {Math.round(elem.virtualMemory.availablePercent)} /><Row>Memoria Virtual </Row> </Col>
      </Card>
      </Col>
      <Col span={16}>
      <Drives  />
      </Col>
 

    </Row> 
    
  </div>
);
