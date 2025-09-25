import React from "react";
import Link from "next/link";
import { connect } from "@/lib/me";
import { Container } from "./container";

export default function Footer() {
  return (
    <Container>
      <div className="border-t border-t-gray-300 p-4 hidden md:flex">
        <div className="flex items-center space-x-2">
          {connect.map((el, index) => {
            const Icon = el.icon;
            return (
              <Link
                key={`connect-${index}`}
                href={el.url} // placeholder
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
