export const reduxHelper = (data, skillData) => {
  data['personnelInfo'] = data?.candidateStatus?.personnelInfo
    ? {
        talriseUserId: data?.['personnelInfo']?.talriseUserId ?? null,
        candidateId: data?.['personnelInfo']?.candidateId ?? null,
        firstName: data?.['personnelInfo']?.firstName ?? null,
        lastName: data?.['personnelInfo']?.lastName ?? null,
        linkedIn: data?.['personnelInfo']?.linkedIn ?? null,
        email: data?.['personnelInfo']?.email ?? null,
        countryPhoneCode: data?.['personnelInfo']?.countryPhoneCode ?? null,
        mobile: data?.['personnelInfo']?.mobile ?? null,
        countryId: data?.['personnelInfo']?.country?.id ?? null,
        cityId: data?.['personnelInfo']?.city?.id ?? null,
      }
    : {
        candidateId: data?.['personnelInfo']?.candidateId ?? null,
        talriseUserId: data?.['personnelInfo']?.talriseUserId ?? null,
        firstName: data?.['personnelInfo']?.firstName ?? null,
        lastName: data?.['personnelInfo']?.lastName ?? null,
        linkedIn: data?.['personnelInfo']?.linkedIn ?? null,
        countryId: '',
        cityId: '',
        email: data?.['personnelInfo']?.email ?? null,
        countryPhoneCode: '',
        mobile: '',
      }

  if (data?.candidateStatus?.position) {
    data['positions'] = [[...data?.['positions']]]
  }

  if (data?.candidateStatus.skillSet) {
    let selectedSkillArray = []
    data?.['skills'].forEach(({ tool, experienceYears }) => {
      skillData?.data?.skills.forEach((skill) => {
        for (let i = 0; i < skill.techs.length; i++) {
          if (skill.techs[i].id === tool.id) {
            let itemList = selectedSkillArray[skill.position.id] ? selectedSkillArray[skill.position.id] : []
            let willbeAdded = {
              position: skill.techs[i],
              experienceYears: experienceYears,
            }
            selectedSkillArray[skill.position.id] = [...itemList, willbeAdded]
          }
        }
      })
    })
    data['skills'] = [...selectedSkillArray]
  }

  if (data?.candidateStatus.language) {
    data['languages'] = data?.['languages'].map(({ language, languageLevel }) => ({
      position: language,
      experienceYears: languageLevel,
    }))
    data['languages'] = [[...data?.['languages']]]
  }

  if (data?.candidateStatus.industry) {
    data['industries'] = data?.['industries'].map(({ industry, experienceYears }) => ({
      position: industry,
      experienceYears: experienceYears,
    }))
    data['industries'] = [[...data?.['industries']]]
  }

  if (data?.candidateStatus.education) {
    data['educations'] = data?.['educations'].map((education) => ({
      universityId: education.university.id,
      degreeId: education.degree.id,
      departmentId: education.department.id,
      startYear: education.startYear,
      endYear: education.endYear,
    }))

    data['educations'] = { educations: data?.['educations'], certificates: data?.['certificates'] }
  }

  const initialCityWorkTypes = {
    countryId: '',
    cityId: '',
    workPlaceIds: [],
    citySelect: [],
  }

  data['preferences'] = data?.candidateStatus.preferences
    ? {
        locations: data?.['preferences'].locations.map((location) => ({
          countryId: location.country.id,
          cityId: location.city.id,
          workPlaceIds: location.workPlaces.map((workPlace) => workPlace.id),
        })),
        minExpectedAmount: data?.['preferences'].minExpectedAmount,
        contractTypeId: data?.['preferences'].contractType?.id,
        currencyId: data?.['preferences'].currency?.id,
        visaStatusId: data?.['preferences'].visaStatus?.id,
        salaryPreferenceId: data?.['preferences'].salaryPreference?.id,
      }
    : {
        locations: [initialCityWorkTypes],
        salaryPreferenceId: '',
        minExpectedAmount: '',
        currencyId: '',
        visaStatusId: '',
        contractTypeId: '',
      }

  data['experiences'] = data?.candidateStatus.experience
    ? data?.['experiences'].map((experience) => ({
        company: experience.company,
        contractTypeId: experience.contractType?.id,
        endDate: experience.endDate,
        explanation: experience.explanation,
        noticePeriodId: experience.noticePeriod?.id,
        startDate: experience.startDate,
        stillWorking: experience.stillWorking,
        title: experience.title,
        toolIds: experience.toolTechIds.map((tool) => tool.id),
        workPlaceId: experience.workPlace?.id,
      }))
    : [
        {
          company: '',
          contractTypeId: '',
          endDate: null,
          explanation: '',
          noticePeriodId: '',
          startDate: null,
          stillWorking: false,
          title: '',
          toolIds: [],
          workPlaceId: '',
        },
      ]

  data['isStudent'] = data?.['isStudent'] ? true : false
  data['isNewGraduate'] = data?.['isNewGraduate'] ? true : false
  return data
}
