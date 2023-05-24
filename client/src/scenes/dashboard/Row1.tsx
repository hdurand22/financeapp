import DashboardBox from '@/components/DashboardBox'
<<<<<<< HEAD
import { useGetKpisQuery } from '@/state/api'
=======
>>>>>>> e022773813a40fe3f90dd68c7cb7a85a30f2ef62
import React from 'react'

// eslint-disable-next-line
type Props = {}

const Row1 = (props: Props) => {
<<<<<<< HEAD
    const { data } = useGetKpisQuery();
  
    return (
=======
  return (
>>>>>>> e022773813a40fe3f90dd68c7cb7a85a30f2ef62
    <>
        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1