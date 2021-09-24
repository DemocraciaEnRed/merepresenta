export function getPartysByDistrict (district){
  return(`
  {
    partido(filter:{district:{slug:{_eq:"${district}"}}}){
      id
      name
      district{
        id
      }
      logo{
        id
      }
    }
  }`)
}
export function getPartyById (id){
  return(`
  {
    partido(filter:{id:{_eq:${Number(id)}}}){
      id
      name
      url_facebook
      url_instagram
      url_twitter
      url_youtube
      summary
      url_web
      district{
        id
      }
      logo{
        id
      }
    	ejes{
        ejes_id{
          name
          slug
        }
        summary
        propuestas{
          id
          summary
        }
      }
    }
  }`)
}
export function getThemeProposalsByParty(tema, provincia){
  return(`
  {
    partido(filter:{district:{slug:{_eq:"${provincia}"}}}){
      id
      name
      summary
      url_web
      district{
        id
      }
      logo{
        id
      }
      ejes(filter:{ejes_id:{slug:{_eq:"${tema}"}}}){
        ejes_id{
          name
          slug
          icon_file{
            id
          }
        }
        summary
        propuestas{
          id
          summary
        }
      }
    }
  }
  `)
}
export function getThemeProposalsByPartyId(tema, partido){
  return(
  ` {
      partido(filter:{id:{_eq:${Number(partido)}}}){
      id
      name
    	summary
    	url_web
      district{
        id
      }
      logo{
        id
      }
    	ejes(filter:{ejes_id:{slug:{_eq:"${tema}"}}}){
        ejes_id{
          name
          slug
        }
        summary
        propuestas{
          id
          summary
        }
      }
    }
  
  

}`
  )
}