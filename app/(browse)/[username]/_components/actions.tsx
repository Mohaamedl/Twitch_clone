"use client";

import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { FormEvent, useState, useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing: initialFollowingState, userId }: ActionsProps) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowingState);
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    setIsFollowing(true); // Atualiza localmente para dar resposta imediata ao usuário

    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(`You are now following ${data.following.username}`);
        })
        .catch(() => {
          setIsFollowing(false); // Reverte caso a requisição falhe
          toast.error("Something went wrong");
        });
    });
  };

  const handleUnFollow = () => {
    setIsFollowing(false); // Atualiza localmente para dar resposta imediata ao usuário

    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          toast.success(`You have unfollowed ${data.following.username}`);
        })
        .catch(() => {
          setIsFollowing(true); // Reverte caso a requisição falhe
          toast.error("Something went wrong");
        });
    });
  };

  const onClick = (e: FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do form
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };

  return (
    <form onSubmit={onClick}>
      <input type="hidden" name="id" value="120" />
      <Button disabled={isPending} variant="primary" type="submit">
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </form>
  );
};
