import Input from "./Input"
import Button from "./Button"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseDate, chooseDistance, chooseHeart, choosePace } from "../redux/slices/RootSlice";


interface RunFormProps {
    id?: string[]
  }


const Runform = (props:RunFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
          server_calls.update(props.id[0], data)
          console.log(`Updated: ${ data.name } ${ props.id }`)
          setTimeout(() => {window.location.reload()}, 500);
          event.target.reset()
        } else {
          dispatch(chooseDate(data.date));
          dispatch(chooseDistance(data.distance));
          dispatch(chooseHeart(data.heart_rate));
          dispatch(choosePace(data.pace));

          server_calls.create(store.getState())
          setTimeout( () => {window.location.reload()}, 500);
        }
        
      }

  return (
 
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Run Date</label>
          <Input {...register('date')}  name='date' placeholder="Date"/>
        </div>
         <div>
          <label htmlFor="distance">Distance</label>
          <Input {...register('distance')}  name='distance' placeholder="Distance"/>
        </div>
        <div>
          <label htmlFor="heart_rate">Heart Rate</label>
          <Input {...register('heart_rate')}  name='heart_rate' placeholder="Heart Rate"/>
        </div>
        <div>
          <label htmlFor="pace">Pace</label>
          <Input {...register('pace')}  name='pace' placeholder="Pace"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-indigo-300 p-2 rounded hover:bg-indigo-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
} 

export default Runform
