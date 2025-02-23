import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  ImageRun,
  TabStopType,
  TextRun,
} from 'docx'
import { letterIcon, linkedInIcon, phoneIcon, locationIcon } from './images'
import { Buffer } from 'buffer'

export const showDate = (experience, whichDate) => {
  if (experience[whichDate]) {
    const [month, year] = experience[whichDate];
    const formattedMonth = month < 10 ? '0' + month : month;
    const date = formattedMonth + '/' + year;
    return whichDate === 'startDate' ? ' since ' + date : date;
  }

  return '';
}

export const DocumentCreator = (candidateUserInfo, location, usedTools) => {
  function createContactInfo(phoneNumber, profileUrl, email, locationData) {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
        },
        {
          type: TabStopType.RIGHT,
        },
      ],
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({ text: '', break: 1 }),
        new ImageRun({
          data: Buffer.from(letterIcon, 'base64'),
          transformation: {
            width: 12,
            height: 10,
          },
        }),
        new TextRun({ text: ` ${email}\t`, font: 'DM Sans', size: 14 }),
        new ImageRun({
          data: Buffer.from(linkedInIcon, 'base64'),
          transformation: {
            width: 10,
            height: 10,
          },
        }),
        new TextRun({ text: ` ${profileUrl}\t`, font: 'DM Sans', size: 14 }),
        new ImageRun({
          data: Buffer.from(phoneIcon, 'base64'),
          transformation: {
            width: 10,
            height: 10,
          },
        }),
        new TextRun({ text: ` ${phoneNumber}\t`, font: 'DM Sans', size: 14 }),
        new TextRun({ text: '', break: 1, font: 'DM Sans' }),
        new ImageRun({
          data: Buffer.from(locationIcon, 'base64'),
          transformation: {
            width: 8,
            height: 10,
          },
        }),
        new TextRun({ text: ' ' + locationData, font: 'DM Sans', size: 14 }),
        new TextRun({ text: '', break: 1 }),
      ],
    })
  }




  function createWorkExperience() {
    return candidateUserInfo.experiences
      ? candidateUserInfo.experiences?.map(
          (experience) =>
            new Paragraph({
              children: [
                new TextRun({
                  text:
                    experience.title +
                    (experience.company ? ' at ' + experience.company : '') +
                    ' ' +
                    showDate(experience, 'startDate') +
                    '-' +
                    showDate(experience, 'endDate') +
                    ' ' +
                    (usedTools !== '' ? 'Used Tools: ' + usedTools : ''),
                  break: 0,
                  bold: true,
                  font: 'DM Sans',
                  size: 20,
                  bullet: {
                    level: 0,
                  },
                }),
                new TextRun({ text: experience.explanation, break: 1, font: 'DM Sans', size: 16 }),
              ],
            })
        )
      : []
  }

  function createLanguageKnowledge() {
    return candidateUserInfo.languages[0]
      ? candidateUserInfo.languages.map(
          (item) =>
            new Paragraph({
              text: item.language.name,
              bullet: {
                level: 0,
              },
              style: 'paragraph',
            })
        )
      : []
  }

  function createPositions() {
    return candidateUserInfo.positions
      ? candidateUserInfo.positions
          ?.map((position) => {
            const arr = []
            arr.push(createPositionHeader(position.position.name))

            if (candidateUserInfo.skills[position.position.id])
              candidateUserInfo.skills[position.position.id]?.forEach((skill) => {
                arr.push(createBullet(skill.position.name))
              })

            return arr
          })
          .reduce((prev, curr) => prev.concat(curr), [])
      : []
  }
  function createEducationCertificates() {
    const educations = candidateUserInfo.educations?.educations?.map(
      (education) =>
        new Paragraph({
          text: education.universityId + '/' + education.departmandId,
          bullet: {
            level: 0,
          },
          style: 'paragraph',
        })
    )
    const certificates = candidateUserInfo.educations?.certificates?.map(
      (certificate) =>
        new Paragraph({
          text: certificate.name,
          bullet: {
            level: 0,
          },
          style: 'paragraph',
        })
    )
    return educations ? educations.concat(certificates) : certificates ? certificates : []
  }
  function createHeading(text) {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2,
      spacing: {
        line: 1.3 * 240,
      },
    })
  }

  function createPositionHeader(positionName) {
    return new Paragraph({
      children: [
        new TextRun({
          text: positionName,
          bold: true,
          font: 'DM Sans',
        }),
      ],
      spacing: {
        line: 1.3 * 240,
      },
    })
  }

  function createBullet(text) {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0,
      },
      style: 'paragraph',
      spacing: {
        line: 1.3 * 240,
      },
    })
  }

  const document = new Document({
    styles: {
      default: {
        title: {
          run: {
            size: 36,
            font: 'DM Sans',
          },
        },
        heading1: {
          run: {
            size: 24,
            font: 'DM Sans',
          },
        },
        heading2: {
          run: {
            size: 24,
            color: '701D9F',
            font: 'DM Sans',
          },
        },
        listParagraph: {
          run: {
            font: 'DM Sans',
          },
        },
      },
      paragraphStyles: [
        {
          id: 'paragraph',
          name: 'paragraph',
          basedOn: 'Normal',
          next: 'Normal',
          run: {
            size: 20,
            font: 'DM Sans',
          },
        },
      ],
    },
    sections: [
      {
        children: [
          new Paragraph({
            text:
              candidateUserInfo.personnelInfo.firstName +
              ' ' +
              candidateUserInfo.personnelInfo.lastName,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: candidateUserInfo.experiences[candidateUserInfo.experiences?.length - 1]?.title,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: '', break: 6 }),
          createHeading('Contact Details'),
          createContactInfo(
            candidateUserInfo.personnelInfo.countryPhoneCode +
              candidateUserInfo.personnelInfo.mobile,
            candidateUserInfo.personnelInfo.linkedIn,
            candidateUserInfo.personnelInfo.email,
            location
          ),
          new Paragraph({ text: '', break: 6 }),
          createHeading('Work Experience'),
          ...createWorkExperience(),
          new Paragraph({ text: '', break: 6 }),
          createHeading('Education & Professional Certificates'),
          ...createEducationCertificates(),
          new Paragraph({ text: '', break: 6 }),
          createHeading('Experienced Skills & Technologies'),
          ...createPositions(),
          new Paragraph({ text: '', break: 6 }),
          createHeading('Language Knowledge'),
          ...createLanguageKnowledge(),
        ],
      },
    ],
  })

  return document
}
