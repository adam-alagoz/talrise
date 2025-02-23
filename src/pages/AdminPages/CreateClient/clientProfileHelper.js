export const clientProfileHelper = (companyDetail) => {
  return companyDetail
    ? {
        companyName: companyDetail.companyName || '',
        companySizeId: companyDetail.companySize?.id || '',
        industryId: companyDetail.industry?.id || '',
        countryId: companyDetail.country?.id || '',
        locationId: companyDetail.city?.id || '',
        linkedin: companyDetail.linkedin || '',
        website: companyDetail.website || '',
        workPlaceIds: companyDetail.workPlaces ? companyDetail.workPlaces.map((workPlace) => workPlace.id) : [],
      }
    : {
        companyName: '',
        companySizeId: '',
        industryId: '',
        linkedin: '',
        locationId: '',
        countryId: '',
        website: '',
        workPlaceIds: [],
      }
}
