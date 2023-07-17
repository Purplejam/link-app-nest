import { ILink } from '../components/interfaces/Link.interface'

export interface ILinkState {
  links: ILink[]
  isLoading: boolean
}

const initialState: ILinkState = {
  links: [
    {
      id: '1',
      name: 'Dummy link',
      url: 'https://google.com',
    },
  ],
  isLoading: true,
}

const linksReducer = (
  state: ILinkState = initialState,
  action: { type: string; payload: { links: ILink[] } },
) => {
  switch (action.type) {
    case 'RESET_LINKS': {
      return {
        ...initialState,
      }
    }
    case 'FETCHING_LINKS': {
      return {
        ...state,
        isLoading: true,
      }
    }
    case 'FETCHING_LINKS_STOP': {
      return {
        ...state,
        isLoading: false,
      }
    }
    case 'FETCH_CURRENT_LINKS': {
      return {
        links: action.payload.links,
        isLoading: false,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default linksReducer
