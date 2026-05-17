import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
  cursor: pointer;
  display: block;
  padding: 0.5rem 0;
  color: #0d6efd;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.55);
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
`
