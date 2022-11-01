 import { ApiProperty } from "@nestjs/swagger"; 

export class CreateGithubDto { 
  @ApiProperty({ type: String, example: 'login random number', description: 'This is login random number' })
  login: string; 

  @ApiProperty({ type: String, example: 'node id random number', description: 'This is nodeid random number' })
  node_id: string; 
   
  @ApiProperty({ type: [Number], example: "Number[]", description: "..." })
  myFileIds: Number[]
}
