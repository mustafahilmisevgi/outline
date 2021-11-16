import * as React from "react";
import { useTranslation } from "react-i18next";
import { useMenuState } from "reakit/Menu";
import ContextMenu from "components/ContextMenu";
import OverflowMenuButton from "components/ContextMenu/OverflowMenuButton";
import Template from "components/ContextMenu/Template";

type Props = {
  id: string;
  onDelete: (ev: React.SyntheticEvent) => Promise<void>;
};

function FileOperationMenu({ id, onDelete }: Props) {
  const { t } = useTranslation();
  const menu = useMenuState({
    modal: true,
  });

  return (
    <>
      <OverflowMenuButton aria-label={t("Show menu")} {...menu} />
      <ContextMenu {...menu} aria-label={t("Export options")}>
        <Template
          {...menu}
          items={[
            {
              title: t("Download"),
              href: "/api/fileOperations.redirect?id=" + id,
            },
            {
              type: "separator",
            },
            {
              title: t("Delete"),
              onClick: onDelete,
            },
          ]}
        />
      </ContextMenu>
    </>
  );
}

export default FileOperationMenu;
