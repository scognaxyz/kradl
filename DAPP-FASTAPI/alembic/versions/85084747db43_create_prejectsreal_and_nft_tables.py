"""create prejectsreal and nft tables

Revision ID: 85084747db43
Revises: fd313a3d5121
Create Date: 2023-01-18 14:54:32.763056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '85084747db43'
down_revision = 'fd313a3d5121'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute("""
    create table projectsreal (
        id bigserial primary key,
        header text,
        rules text,
        pic text,
        description text,
        address text
    );
    create table nft (
        id bigserial primary key,
        title text,
        image text,
        description text
    )
    """)


def downgrade() -> None:
    op.execute("drop tables ;")
