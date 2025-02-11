import React, { FC } from "react";
import { Sparkles } from "~/common/components/sparkles/sparkles.component";
import { ClientGuard } from "~/common/components/guards/client.guard";

export const Annotation: FC = () => {
  return (
    <article className={"annotation-appear delay-500"}>
      <p className={"font-display text-lg"}>
        <strong className={"font-medium"}>
          Je suis un véritable{" "}
          <ClientGuard
            fallback={
              <span className={"font-magic text-blue-500"}>sorcier</span>
            }
          >
            <Sparkles>
              <span className={"font-magic text-blue-500"}>sorcier</span>
            </Sparkles>
          </ClientGuard>
          du front-end
        </strong>{" "}
        qui métamorphose vos défis quotidiens en solutions innovantes.
      </p>
    </article>
  );
};
