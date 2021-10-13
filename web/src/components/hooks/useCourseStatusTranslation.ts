import { useTranslation } from "react-i18next";
import { CourseStatus } from "types/Course";

export const useCourseStatusTranslation = (startDate: string, status: CourseStatus) => {
  const { t } = useTranslation();

  const mapStatusToTranslation = {
    [CourseStatus.Unknown]: {
      text: t("courseCard.unknown"),
      actionButtonText: '',
    },
    [CourseStatus.AvailableAlways]: {
      text: t("courseCard.availableAlways"),
      actionButtonText: t("courseCard.availableAlwaysAction"),
    },
    [CourseStatus.AvailableSoon]: {
      text: t("courseCard.availableSoon"),
      actionButtonText: t("courseCard.availableSoonAction"),
    },
    [CourseStatus.RegistrationOpen]: {
      text: `${t("courseCard.startDate")} ${startDate}`,
      actionButtonText: t("courseCard.startDateAction"),
    },
    [CourseStatus.InProgress]: {
      text: t("courseCard.inProgress"),
      actionButtonText: t("courseCard.inProgressAction"),
    },
    [CourseStatus.NotAvailable]: {
      text: t("courseCard.notAvailable"),
      actionButtonText: '',
    },
  };

  return mapStatusToTranslation[status];
};
