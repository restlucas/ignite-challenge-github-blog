import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { api } from '../../lib/axios'
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileName,
} from './styles'

interface UserProps {
  name: string
  avatarUrl: string
  bio: string
  company?: string
  followers?: number
  github: string
}

export function Profile() {
  const [user, setUser] = useState<UserProps>()

  async function getUser() {
    const response = await api.get('/users/restlucas')
    const data = await response.data

    const user = {
      name: data.name,
      avatarUrl: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      github: data.html_url,
    }

    setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfileContainer>
      {user && (
        <ProfileContent>
          <ProfileAvatar src={user.avatarUrl} alt="" />
          <ProfileInfo>
            <ProfileName>
              <h1>{user.name}</h1>
              <NavLink to={user.github} target="_blank">
                <span>GITHUB</span>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </NavLink>
            </ProfileName>
            <p>
              {user.bio
                ? user.bio
                : 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'}
            </p>
            <div>
              <div>
                <FontAwesomeIcon icon={faGithub} fontSize={18} />
                <span>restlucas</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} fontSize={18} />
                <span>{user.company ? user.company : 'Rocketseat'}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} fontSize={18} />
                <span>{user.followers} seguidor(es)</span>
              </div>
            </div>
          </ProfileInfo>
        </ProfileContent>
      )}
    </ProfileContainer>
  )
}
