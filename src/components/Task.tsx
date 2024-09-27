import React, { useState } from 'react'

interface Props {
  name: string
  description?: string
  status: "todo" | "inprogress" | "done" | "won't do"
}

type TaskConfig = {
  bgColor: string
  statusIcon: string
  taskIcon: string
}


const task = ({name, description, status}: Props) => {
  let taskDescription = description ? description : "" 

  let configTask= (): TaskConfig => {
    switch (status) {
      case 'todo':
        return {
              'bgColor': 'secondary',
              'statusIcon': 'Add_round_duotone.svg',
              'taskIcon': 'Time_atack_duotone.svg'
            } 
        break;
      case 'inprogress':
        return {
          'bgColor': 'warning',
          'statusIcon': 'Time_atack_duotone.svg',
          'taskIcon': 'Time_atack_duotone.svg'
        }
        
        break;
        case 'done':
          return {
            'bgColor': 'success',
            'statusIcon': 'Done_round_duotone.svg',
            'taskIcon': 'Time_atack_duotone.svg'
          }
          break;
          default:
            return {
              'bgColor': 'danger',
              'statusIcon': 'close_ring_duotone.svg',
              'taskIcon': 'close_ring_duotone-1.svg'
            }
            break;
          }
        }
    const [taskConfig, setTaskConfig] = useState<TaskConfig>(configTask())
  return (
      <>
         <div className={'l-'+taskConfig.bgColor+' p-3 w-50 my-3 rounded d-flex justify-content-between'}>
          <span className='align-self-center ms-5'> 
            <p className='fw-bold'>{name}</p>
            <p className='col-9'>{taskDescription}</p>
          </span>
          { taskDescription.length <= 0 ? 
            <span className={'d-btn p-2 rounded d-'+taskConfig.bgColor}>
              <img src={'/'+taskConfig.statusIcon} className='d-flex flex-row-reverse' alt="" />
            </span> : ""
          }

        </div> 
      </>
      
      )
}

export default task