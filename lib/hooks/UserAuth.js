"use client";

import { useState, useEffect, useCallback } from "react";

const getUser = async () => {
  try {
    const res = await fetch("/api/v1/auth/me", {
      credentials: "include", // Important for cookies
    });
    const data = await res.json();

    if (!res.ok) {
      if (res.status === 401) {
        // User is not authenticated, return null instead of throwing
        return null;
      }
      throw new Error(data.error || "Failed to get user");
    }

    return data.user;
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
};

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const userData = await getUser();
      setUser(userData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const isAuthenticated = !!user;
  const isBuyer = user?.role === "renter";
  const isSeller = user?.role === "owner";

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    isBuyer,
    isSeller,
    refetch: fetchUser,
  };
}
